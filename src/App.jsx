import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
       className="box"
      animate={{
        x:1000,
        
      }}
       >

      </motion.div>
    </div>
  );
};

export default App;
