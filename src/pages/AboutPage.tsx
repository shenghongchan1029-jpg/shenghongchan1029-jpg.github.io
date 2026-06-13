import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Me"
        title="关于我。"
        description="产品思维与工程能力的结合体，专注于构建兼具美感与性能的数字产品。"
      />
      <About />
      <Skills />
    </Layout>
  );
}
