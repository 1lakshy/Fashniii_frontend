import React from 'react';
import { motion } from 'framer-motion';
import { category } from '../assets/category';

const Categories = () => {
  return (
    <div className="categories-containt w-[95%] mx-auto">
      {/* <motion.h2
       initial={{ x:-100}}
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease:"easeOut"
        }}
        className="heading my-1"
      >
        Category
      </motion.h2> */}
      <h2 className="heading my-1"> Category</h2>
      <div className="categories-cards flex overflow-x-scroll scroll w-full h-full relative scrollbar-hide">
        {category.map((element, i) => (
          <div className="categories-card lg:min-w-1/2 lg:h-auto lg:my-2 bg-slate-400 mr-3 rounded-2xl ">
            <img
              src={element.view}
              alt=""
              srcset=""
              className="contrast-50 rounded-2xl"
            />
            <p className="absolute bottom-4 text-center pl-4 ">
              {element.text}
            </p>
          </div>
        ))}

        {/* <div className="categories-card min-w-1/2 h-36 bg-slate-400 mr-2 rounded-2xl"></div>
        <div className="categories-card min-w-1/2 h-36 bg-slate-400 mr-2 rounded-2xl"></div>
        <div className="categories-card min-w-1/2 h-36 bg-slate-400 mr-2 rounded-2xl"></div>
        <div className="categories-card min-w-1/2 h-36 bg-slate-400 mr-2 rounded-2xl"></div>
        <div className="categories-card min-w-1/2 h-36 bg-slate-400 mr-2 rounded-2xl"></div> */}
      </div>
    </div>
  );
};

export default Categories;
