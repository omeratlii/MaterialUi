import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// mui sitesinde biraz daha karışık örnekler var. En temiz ve yalın hali bu şekilde. material yerine joy kullanarak daha kısa yoldan yapılabiliyor fakat eski ve kötü gözüküyor.
// useState kullanarak tek tek arttırıp istediğimiz tab arasında geçiş yapabiliyoruz. value değerlerinin eşleşmesi önemli
export const LessonTabs = () => {
    const [value, setValue] = React.useState("1");

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "lightgray" }}>
          <TabList onChange={(event, newValue) => {setValue(newValue);}}>
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit autem minima natus veniam molestias dicta veritatis error obcaecati omnis itaque cupiditate provident officia, distinctio deserunt similique architecto dolores! Repudiandae?</TabPanel>
        <TabPanel value="2">Item Two - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quibusdam repudiandae sapiente doloribus laborum id temporibus eaque inventore quos ipsum, dolor maxime, veritatis, consequatur asperiores assumenda quam aliquid sequi consectetur.</TabPanel>
        <TabPanel value="3">Item Three - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure ipsum culpa eligendi dignissimos optio, at, qui nihil repudiandae mollitia enim cupiditate consectetur. Doloremque, commodi aut perspiciatis harum adipisci rem.</TabPanel>
      </TabContext>
    </Box>
  );
};
