import dynamic from "next/dynamic";
import { Provider, useSelector} from "react-redux";
import { wrapper } from "../store/store";
import { useRouter } from "next/router";
import "../styles/style.scss";
import Layout from "../components/Layout/Layout";
const App = ({ Component, ...rest}) =>
{
  const { store, props } = wrapper.useWrappedStore(rest)
  const router = useRouter()
  

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};
  
export default App