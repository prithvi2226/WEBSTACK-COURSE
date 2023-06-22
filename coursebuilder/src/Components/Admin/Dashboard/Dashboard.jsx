import React, { useEffect } from 'react';
import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../../REDUX/actions/admin';
import Loader from '../../Layout/Loader/Loader';
import cursor from '../../../Assets/Images/cursor.png';
import Sidebar from '../Sidebar';
import { DoughnutChart, LineChart } from './Chart';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow="-2px 0 10px rgba(107, 70, 193, 0.5)"
    p="8"
    borderRadius="lg"
  >
    <Text children={title} color={"antiquewhite"} />

    <HStack spacing="6">
      <Text fontSize="2xl" fontWeight="bold" children={qty} color={"antiquewhite"} />

      <HStack>
        <Text children={`${qtyPercentage}%`} color={"antiquewhite"} />
        {profit ? <RiArrowUpLine color="green" /> : <RiArrowDownLine color="red" />}
      </HStack>
    </HStack>

    <Text opacity={0.6} children="Since Last Month" color={"antiquewhite"} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={['0', '20']}>
    <Heading size="sm" children={title} mb="2" color={"antiquewhite"}/>

    <HStack w="full" alignItems="center">
      <Text children={profit ? '0%' : `-${value}%`} color={"antiquewhite"}/>
      <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} color={"antiquewhite"} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    loading,
    stats,
    viewsCount,
    subscriptionCount,
    usersCount,
    usersPercent,
    subscriptionPercent,
    viewsPercent,
    usersProfit,
    subscriptionProfit,
    viewsProfit,
  } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  return (
    <Grid
      minH="100vh"
      templateColumns={['1fr', '5fr 1fr']}
      css={{ cursor: `url(${cursor}), default` }}
    >
      {loading || !stats ? (
        <Loader />
      ) : (
        <>
          <Box
            boxSizing="border-box"
            py="16"
            px={['4', '0']}
          >
            <Text
              textAlign="center"
              opacity={0.5}
              children={`Last Change was on ${String(new Date()).split('G')[0]}`}
              color={"antiquewhite"}
            />

            <Heading
              children="Dashboard"
              ml={['0', '16']}
              mb="16"
              textAlign={['center', 'left']}
              color={"antiquewhite"}
            />

            <Stack
              direction={['column', 'row']}
              minH="24"
              justifyContent="space-evenly"
            >
              <Databox
                title="Views"
                qty={viewsCount}
                qtyPercentage={viewsPercent}
                profit={viewsProfit}
              />

              <Databox
                title="Users"
                qty={usersCount}
                qtyPercentage={usersPercent}
                profit={usersProfit}
              />

              <Databox
                title="Subscriptions"
                qty={subscriptionCount}
                qtyPercentage={subscriptionPercent}
                profit={subscriptionProfit}
              />
            </Stack>

            <Box
              m={['0', '16']}
              borderRadius="lg"
              p={["0", "16"]}
              mt={["4", "16"]}
              boxShadow="-2px 0 10px rgba(107, 70, 193, 0.5)"
            >
              <Heading
                textAlign={['center', 'left']}
                size="md"
                children="Views Graph"
                pt={['8', '0']}
                ml={['0', '16']}
                color={"antiquewhite"}
              />

              {/* Line Graph here */}
              <LineChart viewsArray={stats.map(item=>item.views)} />
            </Box>

            <Grid templateColumns={["1fr", "2fr 1fr"]}>
              <Box p="4">
                <Heading
                  textAlign={['center', 'left']}
                  size="md"
                  children="Progress Bar"
                  my="8"
                  ml={['0', '16']}
                  color={"antiquewhite"}
                />

                <Box>
                  <Bar profit={viewsProfit} title="Views" value={viewsPercent} />
                  <Bar profit={usersProfit} title="Users" value={usersPercent} />
                  <Bar profit={subscriptionProfit} title="Subscription" value={subscriptionPercent} />
                </Box>
              </Box>

              <Box p={['0', '16']} boxSizing="border-box" py="4">
                <Heading
                  textAlign="center"
                  size="md"
                  mb="4"
                  children="Users"
                  color={"antiquewhite"}
                />

                {/* Donut Graph */}
                <DoughnutChart users={[subscriptionCount, usersCount - subscriptionCount]} />
              </Box>
            </Grid>
          </Box>
          <Sidebar />
        </>
      )}
    </Grid>
  );
};

export default Dashboard;
