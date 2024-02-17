import Hero from '../components/hero/Hero';
import Chatbot from '../components/chatbot/Chatbot';
import Projects from '../components/projects/Projects';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Chatbot/>
      <Projects/>
    </Layout>
  );
};

export default Home;
