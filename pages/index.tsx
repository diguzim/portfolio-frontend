import Layout from '../components/layout';

export const Home = (): JSX.Element => (
  <Layout>
      <button
        onClick={() => {
          window.alert('With typescript and Jest')
        }}
      >
        Test Button
      </button>
  </Layout>
)

export default Home
