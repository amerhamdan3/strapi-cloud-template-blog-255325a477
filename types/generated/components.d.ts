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

export interface CampaignFaQs extends Struct.ComponentSchema {
  collectionName: 'components_campaign_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'check';
  };
  attributes: {
    faq: Schema.Attribute.Component<'shared.faq', true>;
    subtitle: Schema.Attribute.String;
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

export interface CampaignImpactLevel extends Struct.ComponentSchema {
  collectionName: 'components_campaign_impact_levels';
  info: {
    displayName: 'Impact Level';
    icon: 'star';
  };
  attributes: {
    options: Schema.Attribute.Component<'shared.payment-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CampaignStory extends Struct.ComponentSchema {
  collectionName: 'components_campaign_stories';
  info: {
    displayName: 'Story';
    icon: 'feather';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface RegionsImageSection extends Struct.ComponentSchema {
  collectionName: 'components_regions_image_sections';
  info: {
    displayName: 'imageSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface RegionsMultiImageSection extends Struct.ComponentSchema {
  collectionName: 'components_regions_multi_image_sections';
  info: {
    displayName: 'multiImageSection';
    icon: 'command';
  };
  attributes: {
    rightImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    underText: Schema.Attribute.Media<'images'>;
  };
}

export interface RegionsTitleWithCards extends Struct.ComponentSchema {
  collectionName: 'components_regions_title_with_cards';
  info: {
    displayName: 'titleWithCards';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.title-subtitle', true>;
    title: Schema.Attribute.String;
  };
}

export interface RegionsVideos extends Struct.ComponentSchema {
  collectionName: 'components_regions_videos';
  info: {
    displayName: 'Videos';
    icon: 'headphone';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'shared.youtube-video', true>;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'hashtag';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
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

export interface SharedPaymentCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_payment_cards';
  info: {
    displayName: 'paymentCard';
  };
  attributes: {
    amount: Schema.Attribute.Integer;
    buttonText: Schema.Attribute.String;
    popular: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface SharedSourceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_source_cards';
  info: {
    displayName: 'sourceCard';
    icon: 'link';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    urlText: Schema.Attribute.String;
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

export interface SharedTitleSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_subtitles';
  info: {
    displayName: 'titleSubtitle';
    icon: 'server';
  };
  attributes: {
    subtitle: Schema.Attribute.RichText;
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
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoCode: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'campaign.campaign': CampaignCampaign;
      'campaign.cards-section': CampaignCardsSection;
      'campaign.fa-qs': CampaignFaQs;
      'campaign.featured-story': CampaignFeaturedStory;
      'campaign.gallery': CampaignGallery;
      'campaign.header-card': CampaignHeaderCard;
      'campaign.icon-card': CampaignIconCard;
      'campaign.impact-level': CampaignImpactLevel;
      'campaign.story': CampaignStory;
      'regions.image-section': RegionsImageSection;
      'regions.multi-image-section': RegionsMultiImageSection;
      'regions.title-with-cards': RegionsTitleWithCards;
      'regions.videos': RegionsVideos;
      'shared.faq': SharedFaq;
      'shared.image-with-text': SharedImageWithText;
      'shared.media': SharedMedia;
      'shared.payment-card': SharedPaymentCard;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.source-card': SharedSourceCard;
      'shared.text-list': SharedTextList;
      'shared.title-subtitle': SharedTitleSubtitle;
      'shared.youtube-video': SharedYoutubeVideo;
    }
  }
}
