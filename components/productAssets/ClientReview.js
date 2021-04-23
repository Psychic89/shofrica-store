import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    stars: '5',
    title: 'Beautiful products',
    description: 'I am in love with this company. I almost always buy online, but the customer service has always been amazing, and the whole business model is awesome. The designs are simple, modern, and sleek. The quality is great, and the prices are pretty fair considering competitors. ',
    reviewBy: 'Sam C.',
    date: 'April, 2021'
  },
  {
    stars: '4.5',
    title: 'Good quality!',
    description:
      'Great fit and I get loads of compliments! Great products, fast delivery. I recommend Shofrica.',
    reviewBy: 'Patricia B.',
    date: 'April, 2021'
  },
  {
    stars: '4',
    title: 'Expectations exceeded',
    description:
      'It is always a risk ordering jewelry online but I smile everytime I look at my ring: perfect fit and size.',
    reviewBy: 'Danielle L.',
    date: 'December, 2019'
  },
  {
    stars: '5',
    title: 'So comfortable!',
    description:
      'Absolutely in love with this company. The customer service is down right amazing. The products are beautiful. I just ordered my third piece from them; can\'t get enough!',
    reviewBy: 'Heidi C.',
    date: 'December, 2019'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              All reviews
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.5 stars from 10 reviews
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                View all reviews
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
