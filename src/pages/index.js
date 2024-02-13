import {Layout} from './Layout';
import Hero from '../components/hero/Hero';
import Chatbot from '../components/chatbot/Chatbot';
import Projects from '../components/projects/Projects';

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
