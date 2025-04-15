import React from "react";
import { motion } from "framer-motion";

const SparkEffect = () => {
  // Generate main fire sparks with more variation
  const sparks = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    delay: Math.random() * 3,
    duration: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    color: Math.random() > 0.6 ? "bg-chainsaw-orange" : Math.random() > 0.3 ? "bg-red-500" : "bg-yellow-500",
    movement: {
      x: (Math.random() - 0.5) * 20,
      y: -Math.random() * 30 - 10,
    },
  }));

  // Generate floating embers
  const embers = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    movement: {
      x: (Math.random() - 0.5) * 15,
      y: -Math.random() * 40 - 20,
    },
  }));

  // Generate small flickering sparks
  const flickers = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 1,
    duration: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.9 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main fire sparks */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className={`absolute rounded-full ${spark.color} mix-blend-screen`}
          style={{
            width: spark.size,
            height: spark.size,
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, spark.opacity, 0],
            scale: [0, 1, 0],
            x: [0, spark.movement.x, 0],
            y: [0, spark.movement.y, 0],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating embers */}
      {embers.map((ember) => (
        <motion.div
          key={`ember-${ember.id}`}
          className="absolute rounded-full bg-chainsaw-orange/40 mix-blend-screen"
          style={{
            width: ember.size,
            height: ember.size,
            left: `${ember.x}%`,
            top: `${ember.y}%`,
            filter: "blur(0.5px)",
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, ember.opacity, 0],
            x: [0, ember.movement.x, 0],
            y: [0, ember.movement.y, 0],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Quick flickering sparks */}
      {flickers.map((flicker) => (
        <motion.div
          key={`flicker-${flicker.id}`}
          className="absolute rounded-full bg-yellow-500/60 mix-blend-screen"
          style={{
            width: flicker.size,
            height: flicker.size,
            left: `${flicker.x}%`,
            top: `${flicker.y}%`,
            filter: "blur(0.3px)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, flicker.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: flicker.duration,
            delay: flicker.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SparkEffect; 