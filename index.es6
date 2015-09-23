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
      teaserId: React.PropTypes.number.isRequired,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/Article',
      itemProp: 'article',
    };
  }
  render() {
    const teaserContent = [];
    if (this.props.image) {
      teaserContent.push((
        <img {...this.props.image}
          itemProp="image"
          className="teaser__img"
          key={`teaser__img_${this.props.teaserId}`}
        />));
    }
    if (this.props.flyTitle) {
      teaserContent.push((
        <h2
          className="teaser__flytitle"
          itemProp="alternativeHeadline"
          key={`teaser__flytitle_${this.props.teaserId}`}
        >{this.props.flyTitle}</h2>
      ));
    }
    if (this.props.title) {
      teaserContent.push((
        <h1
          className="teaser__title"
          itemProp="headline"
          key={`teaser__title_${this.props.teaserId}`}
        >{this.props.title}</h1>));
    }
    if (this.props.dateTime) {
      teaserContent.push((
        <time
          className="teaser__datetime"
          itemProp="dateCreated"
          dateTime={this.props.dateTime}
          key={`teaser__datetime_${this.props.teaserId}`}
        >{this.props.dateTime}</time>));
    }
    if (this.props.text) {
      teaserContent.push((
        <div
          className="teaser__text"
          itemProp="description"
          key={`teaser__text_${this.props.teaserId}`}
        >{this.props.text}</div>));
    }

    return (
      <article
        className="teaser"
        itemScope itemType={this.props.itemType} itemProp={this.props.itemProp}
        role="article"
      >
      {(this.props.link) ?
        (<a {...this.props.link}
          className="teaser__link"
          itemProp="url"
         >{teaserContent}</a>) : teaserContent}
      </article>
    );
  }
}
