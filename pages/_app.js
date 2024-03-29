/* global process */
import App from 'next/app';
import React from 'react';
import '../style/scss/style.scss';
import { wrapper } from '../store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import commerce from '../lib/commerce';
import { loadStripe } from '@stripe/stripe-js';
import { setCustomer } from '../store/actions/authenticateActions';
import TagManager from 'react-gtm-module';


const tagManagerArgs = {
  gtmId: 'GTM-KVH57B3'
}

class MyApp extends App {
  constructor(props) {
    super(props);

    // If using Stripe, initialise it here. This allows Stripe to track behaviour
    this.stripePromise = null;
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) { // has API key
        this.stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
  }

  stripePromise = null;

  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
    this.props.setCustomer();
  }

  static async getInitialProps({ Component, ctx }) {
    // Fetch products
    // Fetch categories
    const { data: products } = await commerce.products.list();
    const { data: categories } = await commerce.categories.list();

    // Allows store to be updated via the dispatch action
    ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories });
    ctx.store.dispatch({ type: 'STORE_PRODUCTS', payload: products });

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component
        {...pageProps}
        stripe={this.stripePromise}
      />
    );
  }
}

export default compose(
  wrapper.withRedux, // HOC wrapper
  connect(null, { setCustomer }) // function that returns wrapper
)(MyApp);
