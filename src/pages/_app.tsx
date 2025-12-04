import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import '../styles/globals.css';
import ClickSpark from '../components/ClickSpark';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ClickSpark
      sparkColor="#f97316"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
      easing="ease-out"
    >
      {/* Dégradé flou qui respire en arrière-plan */}
      <div className="bg-breathing-glow" />

      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ClickSpark>
  );
}

export default MyApp;
