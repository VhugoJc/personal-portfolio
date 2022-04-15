import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants}>
    {items.map(i => (
      <MenuItem toggle={toggle} i={i} key={i.id} />
    ))}
  </motion.ul>
);

const items = [
  {
    id:0,
    text:'⚡ Sobre mí',
    url:'#about-me'
  },
  {
    id:1,
    text:'🎵 Música',
    url:'#my-music'
  },
  {
    id:2,
    text:'🔥 Mis herramientas favoritas',
    url:'#my-tools'
  },
  {
    id:3,
    text:'💡 Mi trabajo Creativo',
    url:'#my-work'
  }
];