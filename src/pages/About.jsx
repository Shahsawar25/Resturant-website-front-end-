import PageBanner from '../components/PageBanner/PageBanner';
import OurStory from '../components/OurStory/OurStory';
import TeamIntro from '../components/TeamIntro/TeamIntro';
import Timeline from '../components/Timeline/Timeline';
import usePageTitle from '../hooks/usePageTitle';

function About() {
  usePageTitle('About');
  return (
    <div>
      <PageBanner title="About Us" subtitle="Home / About" />
      <OurStory />
      <TeamIntro />
      <Timeline />
    </div>
  );
}

export default About;