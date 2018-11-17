import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadNewsList } from '../../actions/news';
import { getNewsListbyParam } from '../../reducers/news';

//new elements
import NewsBlock from './element/news_block';
import NewsImageBlock from './element/news_image_block';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class NewsList extends React.Component {

  static propTypes = {
    // 要获取的列表的id
    id: PropTypes.string.isRequired,
    // 筛选条件
    filter: PropTypes.object.isRequired,

    // 列表数据
    list: PropTypes.object.isRequired,
    // 加载列表的方法
    loadNewsList: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

    const { id, filter, list, loadNewsList } = this.props

    if (!list.data) {
      this.props.loadNewsList({
        id,
        filter
      })
    }

  }

  render() {

    const { list } = this.props
    const { loading, data } = list

    return(

      <div className = 'container'>
        <div className="row h-100">

          <div className="col">
            <div id="carouselExampleControls" styleName = 'leftcontainer' className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" styleName = "carousel">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://s3-us-west-1.amazonaws.com/lengbase/ReactNews/carousel_1.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://s3-us-west-1.amazonaws.com/lengbase/ReactNews/carousel_2.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://s3-us-west-1.amazonaws.com/lengbase/ReactNews/carousel_3.jpg" alt="Third slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://s3-us-west-1.amazonaws.com/lengbase/ReactNews/carousel_4.jpg" alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <NewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>

          </div>

            <div className="col">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-toutiao-tab" data-toggle="tab" href="#nav-toutiao" role="tab" aria-controls="nav-toutiao" aria-selected="true">头条新闻</a>
                  <a className="nav-item nav-link" id="nav-guoji-tab" data-toggle="tab" href="#nav-guoji" role="tab" aria-controls="nav-guoji" aria-selected="false">国际</a>
                </div>
              </nav>

              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-toutiao" role="tabpanel" aria-labelledby="nav-toutiao-tab">
                  <NewsBlock count={22} type="top" bordered="true" />
                </div>
                <div className="tab-pane fade" id="nav-guoji" role="tabpanel" aria-labelledby="nav-guoji-tab">
                  <NewsBlock count={22} type="guoji" bordered="true" />
                </div>
              </div>
            </div>

          <div className="col">
          </div>

          </div>
        </div>

);

};

}
NewsList = CSSModules(NewsList, styles);

const mapStateToProps = (state, props) => {
  return {
    list: getNewsListbyParam(state, props.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadNewsList: bindActionCreators(loadNewsList, dispatch)
  }
}

NewsList = connect(mapStateToProps,mapDispatchToProps)(NewsList);
export default NewsList;
