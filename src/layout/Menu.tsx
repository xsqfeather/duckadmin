import { useState } from "react";
import Box from "@mui/material/Box";

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

import Admins from "../resources/admins";
import Tenants from "../resources/tenants";
import Users from "../resources/users";
import Wallets from "../resources/wallets";
import Conversations from "../resources/conversations";
import Ai_models from "../resources/ai_models";
import Wallet_records from "../resources/wallet_records";

type MenuName =
  | "menuProduct"
  | "menuNft"
  | "menuInterests"
  | "menuTenant"
  | "menuAdmin"
  | "menuUser"
  | "menuOrder"
  | "menuArticle"
  | "menuFinance"
  | "appSettings"
  | "menuWuAv";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuProduct: false,
    menuNft: false,
    menuInterests: false,
    menuTenant: false,
    menuAdmin: false,
    menuUser: false,
    appSettings: false,
    menuOrder: false,
    menuArticle: false,
    menuFinance: false,
    menuWuAv: false,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <MenuItemLink
        to="/tenants"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.tenants.name`, {
          smart_count: 2,
        })}
        leftIcon={<Tenants.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/conversations"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.conversations.name`, {
          smart_count: 2,
        })}
        leftIcon={<Conversations.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/users"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.users.name`, {
          smart_count: 2,
        })}
        leftIcon={<Users.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/admins"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.admins.name`, {
          smart_count: 2,
        })}
        leftIcon={<Admins.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/wallets"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.wallets.name`, {
          smart_count: 2,
        })}
        leftIcon={<Wallets.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/wallet_records"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.wallet_records.name`, {
          smart_count: 2,
        })}
        leftIcon={<Wallet_records.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/ai_models"
        state={{ _scrollToTop: true }}
        primaryText={translate(`resources.ai_models.name`, {
          smart_count: 2,
        })}
        leftIcon={<Ai_models.icon />}
        dense={dense}
      />
    </Box>
  );
};

export default Menu;
