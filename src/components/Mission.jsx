import missionImg from '../assets/mission.jpeg'
 import mission from '../assets/mission.mp4'
import { MISSION } from '../constants/menu'
 import { motion } from 'framer-motion'
export default function Mission() {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl text-white">Our Mission</h2>
        <div className=" relative flex items-center justify-center">
          <motion.video
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
          >
            <source src={mission} type="video/mp4" />
          </motion.video>
          <div className="absolute h-full w-full rounded-3xl bg-black/40"> </div>
          <p className=" absolute max-w-lg tracking-tighter lg:text-3xl text-white">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
}
