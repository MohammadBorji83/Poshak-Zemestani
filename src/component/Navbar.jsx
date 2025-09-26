import React, { useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { AiOutlineSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Navbar() {
  const [Open, setOpen] = useState(false);
  const [Dark, setDark] = useState(false);

  // کانتینر برای انیمیشن گروهی
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  // آیتم‌های منو
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-white p-2 w-full shadow">
      <nav className="flex flex-row justify-between items-center">
        {/* لوگو */}
        <motion.div
          className="flex justify-end mr-3 p-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold">AURA</h1>
        </motion.div>

        {/* منوی وسط (دسکتاپ) */}
        <motion.div
          className="hidden md:flex gap-6 justify-center items-center"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a href="#" className="hover:text-gray-500" variants={itemVariants}>
            جدید ترین ها
          </motion.a>
          <motion.a href="#" className="hover:text-gray-500" variants={itemVariants}>
            مردانه
          </motion.a>
          <motion.a href="#" className="hover:text-gray-500" variants={itemVariants}>
            زنانه
          </motion.a>
          <motion.a href="#" className="text-red-600 flex" variants={itemVariants}>
            حراج <FaFireAlt size={20} />
          </motion.a>
        </motion.div>

        {/* دکمه‌ها (دسکتاپ) */}
        <motion.div
          className="hidden md:flex justify-center items-center gap-3"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            variants={itemVariants}
          >
            خرید کنید
          </motion.button>
          <motion.button
            onClick={() => setDark(!Dark)}
            className="w-12 h-12 rounded-full p-2 flex items-center justify-center"
            variants={itemVariants}
          >
            {Dark ? <AiOutlineSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
        </motion.div>

        {/* منوی موبایل */}
        <div className="items-center justify-center md:hidden cursor-pointer">
          <button onClick={() => setOpen(!Open)}>
            {Open ? <MdClose size={30} /> : <TiThMenu size={30} />}
          </button>
        </div>
      </nav>

      {/* لیست موبایل */}
      {Open && (
        <motion.ul
          className="flex flex-col mt-4 space-y-4 items-center md:hidden"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={itemVariants}>
            <a href="#">جدید ترین ها</a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#">مردانه</a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#">زنانه</a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#" className="text-red-600 flex">
              حراج <FaFireAlt size={20} />
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              خرید کنید
            </button>
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
}

export default Navbar;

