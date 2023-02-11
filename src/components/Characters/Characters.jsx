import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import moment from "moment/moment";
import { GiAerialSignal } from "react-icons/gi";

function Characters({ characters }) {
  return (
    <AnimatePresence>
      <motion.div layout>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 px-4 md:px-0">
          {characters.map((character) => {
            const {
              id,
              name,
              species,
              status,
              gender,
              type,
              location: { name: locationName },
              image,
              created,
            } = character;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, translateX: "-100%" }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0 }}
              >
                <figure className="relative group">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full aspect-square"
                  />
                  <div className="absolute opacity-0 inset-0 group-hover:opacity-100 grid place-content-center group-hover:bg-black/80 transition 1s ease-in">
                    <h1 className="text-2xl font-bold text-center">
                      {locationName}
                    </h1>
                  </div>
                </figure>
                <div className=" bg-gray-700 space-y-4 rounded-b text-emerald-300 font-bold px-2 py-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">{species}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={classNames({
                          "text-blue-400 uppercase":
                            status.toLowerCase() === "alive",
                          "text-red-500 uppercase":
                            status.toLowerCase() === "dead",
                          "text-yellow-300 uppercase":
                            status.toLowerCase() === "unknown",
                        })}
                      >
                        <GiAerialSignal />
                      </span>
                      <span className="text-white">{status}</span>
                    </div>
                  </div>
                  <div>
                    <h3>{name}</h3>

                    <h6 className="text-gray-400">
                      {moment(created).fromNow()}
                    </h6>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Characters;
