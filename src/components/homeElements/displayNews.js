import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('newsData');
    this.unsubscribe = null;
    this.state = {
      filtered: [],
    };
  }


  onCollectionUpdate = (querySnapshot) => {
    const filtered = [];
    querySnapshot.forEach((doc) => {
      const { heading, link, date, description, url } = doc.data();
      filtered.push({
        key: doc.id,
        doc, // DocumentSnapshot
        url, heading, link, date, description
      });
    });
    this.setState({
      filtered
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.orderBy("heading", "asc").onSnapshot(this.onCollectionUpdate);
  }
  render() {

    return (
      <div >

        <center>
          <label htmlFor="formGroupExampleInput">Daily News</label>
        </center>
        <br />
        <div class="container-fluid">
          <div class="row AboutPageSet">
            <div class="offset-md-4 col-md-4">
            </div>
          </div>
          <div className="row">

            <div className="offset-md-4 col-md-4 col-sm-12 SetsDiscDatas">

              <div className="row SetNews_portal">
                <div className="col-sm-12">
                  {this.state.filtered.map(pack =>
                    <div className="row">
                      <div className="col-sm-12 Set_news_portal">
                        <a href={pack.url} target="_blank">
                          <img src={pack.url} alt="No Preview Available" />
                        </a>
                        <div className="card-body">
                          <h4 className="card-title Card_Title">{pack.heading}</h4>
                          <p className="SetDateYear">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
  &nbsp;<span id="date">{pack.date}</span>
                          </p>
                          <a className="Set_WebLink" href={pack.link} target="_blank">{pack.link}</a>
                          <p className="card-text Card_Text">{pack.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>




      </div >);
  }
}
export default NewsDetail;
