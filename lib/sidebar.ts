import {
    IconChartBar,
    IconDashboard,
    IconListDetails,
} from "@tabler/icons-react";

const navList = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
    },
    {
        title: "Data Kapal",
        url: "/ships",
        icon: IconListDetails,
    },
    {
        title: "Data Peringatan",
        url: "/alert",
        icon: IconChartBar,
    },
];

export { navList };
