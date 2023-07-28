import React, { useContext } from "react";
import logo from '../assets/logo.svg'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  PowerIcon,
  PlusIcon,
  SunIcon
} from "@heroicons/react/24/solid";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate=useNavigate()
  const { openRight, closeDrawerRight,handleOpenDialog } = useContext(AppContext)

  return (
    <React.Fragment>
      <Drawer open={openRight} onClose={closeDrawerRight} placement="right" className="bg-[var(--bg-secondary)]">
        <div className="mb-2 flex items-center justify-between p-4">
          <div className="flex items-center gap-3 text-[var(--primary)] text-3xl abel ml-4">
            <img src={logo} className="w-7" alt="" />taskDone
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          </IconButton>
        </div>
        <List>
          <ListItem className="text-[var(--text)] hover:bg-[var(--bg-secondary)]">
            <ListItemPrefix>
            <p className='text-xl py-1 px-3 bg-teal-500 text-black rounded-full'>S</p>
            </ListItemPrefix>
            <p className='text-lg text-[var(--text)]'>Shreedhar Urawane</p>
          </ListItem>
          <ListItem className="text-[var(--text)] mt-8" onClick={()=>{handleOpenDialog();closeDrawerRight()}}>
            <ListItemPrefix>
              <PlusIcon className="h-5 w-5" />
            </ListItemPrefix>
            New Collection
          </ListItem>
          <ListItem className="text-[var(--text)]" onClick={()=>{navigate('/dashboard');closeDrawerRight()}}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>

          <ListItem className="text-[var(--text)]" disabled={true}>
            <ListItemPrefix>
              <SunIcon className="h-5 w-5" />
            </ListItemPrefix>
            Light Mode
          </ListItem>
          <ListItem className="text-[var(--text)]" onClick={()=>{navigate('/profile');closeDrawerRight()}}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>

          <ListItem className="text-[var(--text)]">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Menu