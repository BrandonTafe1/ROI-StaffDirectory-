import React from 'react';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import AddStaff from './screens/AddStaff';
import StaffDetails from './screens/StaffDetails';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  const [screen, setScreen] = React.useState("home");
  const [selectedStaff, setSelectedStaff] = React.useState(null);

  const [staffList, setStaffList] = React.useState([
    {
      id: 1,
      name: "Alexander Ross",
      role: "IT Manager",
      email: "alex.ross@roi.com",
      phone: "0400 111 222",
      photo: require('./assets/profile.png')
    },
    {
      id: 2,
      name: "Billy Jones",
      role: "Executive Manager",
      email: "billy.jones@roi.com",
      phone: "0400 333 444",
      photo: require('./assets/profile.png')
    }
  ]);

  const addStaff = (newStaff) => {
    setStaffList([...staffList, newStaff]);
  };

  return (
    <View style={{ flex: 1 }}>
      {screen === "home" && <HomeScreen setScreen={setScreen} />}

      {screen === "directory" && (
        <DirectoryScreen
          setScreen={setScreen}
          staffList={staffList}
          setSelectedStaff={setSelectedStaff}
        />
      )}

      {screen === "details" && (
        <StaffDetails
          setScreen={setScreen}
          selectedStaff={selectedStaff}
        />
      )}

      {screen === "add" && (
        <AddStaff
          setScreen={setScreen}
          addStaff={addStaff}
        />
      )}

      {screen === "settings" && (
        <SettingsScreen
          setScreen={setScreen}
        />
      )}
    </View>
  );
}
