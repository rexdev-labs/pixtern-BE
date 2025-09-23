import type { Schema, Struct } from '@strapi/strapi';

export interface SectionInternSection extends Struct.ComponentSchema {
  collectionName: 'components_section_intern_sections';
  info: {
    displayName: 'Intern Section';
  };
  attributes: {
    interns: Schema.Attribute.Relation<'oneToMany', 'api::intern.intern'>;
    section: Schema.Attribute.Component<'shared.section', false>;
  };
}

export interface SectionProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_section_project_sections';
  info: {
    displayName: 'Project Section';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    section: Schema.Attribute.Component<'shared.section', false>;
  };
}

export interface SectionTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_teams';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    section: Schema.Attribute.Component<'shared.section', false>;
    teams: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
  };
}

export interface SectionTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionWhatWeDoSection extends Struct.ComponentSchema {
  collectionName: 'components_section_what_we_do_sections';
  info: {
    displayName: 'What We Do Section';
  };
  attributes: {
    jobs: Schema.Attribute.Component<'shared.job', true> &
      Schema.Attribute.Required;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedJob extends Struct.ComponentSchema {
  collectionName: 'components_shared_jobs';
  info: {
    displayName: 'Job';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    illustration: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'paperPlane';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['youtube', 'linkedin', 'instagram', 'telegram', 'facebook', 'github']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.intern-section': SectionInternSection;
      'section.project-section': SectionProjectSection;
      'section.team': SectionTeam;
      'section.testimonial-section': SectionTestimonialSection;
      'section.what-we-do-section': SectionWhatWeDoSection;
      'shared.button': SharedButton;
      'shared.job': SharedJob;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-media': SharedSocialMedia;
    }
  }
}
