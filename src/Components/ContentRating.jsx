
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike:() => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },
        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
            //Add text here
            ---Add text here---
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>
        </div>
        <div className='total-ratings'><p>Total Ratings: ({this.state.totalRatings})</p></div>
     </div>
     </>
    );
  }
}

export default ContentRating;
