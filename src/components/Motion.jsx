"use client";
import { motion } from "framer-motion";

export default function Motion(props) {
  switch (props.type) {
    case "li":
      return <motion.li {...props}>{props.children}</motion.li>;
    default:
      return <motion.div {...props}>{props.children}</motion.div>;
  }
}
