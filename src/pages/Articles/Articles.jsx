import "./Articles.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Helmet } from "react-helmet"

export default function Articles() {
    return (
        <>
  <Helmet>
        <title>Articles</title>
      </Helmet>
        <Header></Header>
        <Footer></Footer>
        </>
    )
}