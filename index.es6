import React from 'react';

export default class Teaser extends React.Component {
  static get propTypes() {
    return {
      image: React.PropTypes.object,
      flyTitle: React.PropTypes.string,
      title: React.PropTypes.string.isRequired,
      dateTime: React.PropTypes.string,
      text: React.PropTypes.string,
      link: React.PropTypes.object,
      itemType: React.PropTypes.string,
      itemProp: React.PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/Article',
      itemProp: 'article',
    };
  }
  render() {
    const children = {};
    if (this.props.image) {
      children.img = (
        <img {...this.props.image}
          itemProp="image"
          className="teaser__img"
        />);
    }
    if (this.props.flyTitle) {
      children.flyTitle = (
        <h2
          className="teaser__flytitle"
          itemProp="alternativeHeadline"
        >{this.props.flyTitle}</h2>
      );
    }
    if (this.props.title) {
      children.title = (
        <h1
          className="teaser__title"
          itemProp="headline"
        >{this.props.title}</h1>);
    }
    if (this.props.dateTime) {
      children.dateTime = (
        <time
          className="teaser__datetime"
          itemProp="dateCreated"
          dateTime={this.props.dateTime}
        >{this.props.dateTime}</time>);
    }
    if (this.props.text) {
      children.text = (
        <div
          className="teaser__text"
          itemProp="description"
        >{this.props.text}</div>);
    }
    let teaserContent = '';
    if (this.props.link) {
      teaserContent = (
        <a {...this.props.link}
          className="teaser__link"
          itemProp="url"
        >
        {React.addons.createFragment(children)}
        </a>);
    } else {
      teaserContent = React.addons.createFragment(children);
    }

    return (
      <article
        className="teaser"
        itemScope itemType={this.props.itemType} itemProp={this.props.itemProp}
      >{teaserContent}
      </article>
    );
  }
}
