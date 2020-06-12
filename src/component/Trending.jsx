import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import TrendingNav from './TrendingNav'
class Trending extends Component {

  state = {
    loading: true,
    eminem: []
  };

  async componentDidMount() {
    const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58"
      }
    })
    const data = await response.json();
    // this.setState({ eminem: data.data[0], loading: false })
    // console.log(state.eminem.album.title);

  }

  render() {
    return (
      <Col sm={9} md={9} lg={10} className=" pb-sm-4" >
        <TrendingNav />
        < Row>
          <Col></Col>
        </Row>

        <Row className=" ml-5">
          <Col>
            <div className="rock">
              <h2></h2>
              <Row sm={2} lg={3}
                className="   imgLinks py-3"
                className="Eminem"
              >

              </Row>

            </div>
          </Col>
        </Row>

        <div className="row ml-5">
          <div className="col-10">
            <div className="rock">
              <h2>Metallica</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                className="Metallica"
              ></div>
            </div>
          </div>
        </div>
        <div className="row ml-5">
          <div className="col-10">
            <div className="rock">
              <h2>Behemoth</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                className="Behemoth"
              ></div>
            </div>
          </div>
        </div>


      </Col>
    )
  }
}
export default Trending