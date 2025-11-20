import type { Schema, Struct } from '@strapi/strapi';

export interface CampaignCampaign extends Struct.ComponentSchema {
  collectionName: 'components_campaign_campaigns';
  info: {
    displayName: 'Bottom Section';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'shared.text-list', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CampaignCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_campaign_cards_sections';
  info: {
    displayName: 'Cards Section';
    icon: 'grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'campaign.icon-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CampaignFeaturedStory extends Struct.ComponentSchema {
  collectionName: 'components_campaign_featured_stories';
  info: {
    displayName: 'Featured Story';
    icon: 'handHeart';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.text-list', true>;
    card: Schema.Attribute.Component<'campaign.icon-card', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    youtubeVideoCode: Schema.Attribute.String;
  };
}

export interface CampaignGallery extends Struct.ComponentSchema {
  collectionName: 'components_campaign_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'brush';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.image-with-text', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'shared.youtube-video', true>;
  };
}

export interface CampaignHeaderCard extends Struct.ComponentSchema {
  collectionName: 'components_campaign_header_cards';
  info: {
    displayName: 'header card';
    icon: 'apps';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CampaignIconCard extends Struct.ComponentSchema {
  collectionName: 'components_campaign_icon_cards';
  info: {
    displayName: 'icon card';
    icon: 'grid';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['bubble', 'border']> &
      Schema.Attribute.DefaultTo<'bubble'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageWithText extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_texts';
  info: {
    displayName: 'ImageWithText';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTextList extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_lists';
  info: {
    displayName: 'Text List';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedYoutubeVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_youtube_videos';
  info: {
    displayName: 'YoutubeVideo';
    icon: 'television';
  };
  attributes: {
    title: Schema.Attribute.String;
    videoCode: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'campaign.campaign': CampaignCampaign;
      'campaign.cards-section': CampaignCardsSection;
      'campaign.featured-story': CampaignFeaturedStory;
      'campaign.gallery': CampaignGallery;
      'campaign.header-card': CampaignHeaderCard;
      'campaign.icon-card': CampaignIconCard;
      'shared.image-with-text': SharedImageWithText;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text-list': SharedTextList;
      'shared.youtube-video': SharedYoutubeVideo;
    }
  }
}
