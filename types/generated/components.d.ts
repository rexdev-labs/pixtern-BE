import type { Schema, Struct } from '@strapi/strapi';

export interface FooterCategory extends Struct.ComponentSchema {
  collectionName: 'components_footer_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarNavbar extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    darkIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    lightIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    navigations: Schema.Attribute.Component<'navbar.navigation', true>;
  };
}

export interface NavbarNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileDecoration extends Struct.ComponentSchema {
  collectionName: 'components_profile_decorations';
  info: {
    displayName: 'Decoration';
  };
  attributes: {
    aboutUsFirstOrnament: Schema.Attribute.Media<'images'>;
    aboutUsSecondOrnament: Schema.Attribute.Media<'images'>;
    avatarPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    photoOrnament: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    photoOrnamentPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface ProfileDetail extends Struct.ComponentSchema {
  collectionName: 'components_profile_details';
  info: {
    displayName: 'Detail';
  };
  attributes: {
    aboutMe: Schema.Attribute.Text;
    avatarImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    originalImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    personImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    portofolio: Schema.Attribute.Media<'images', true>;
    role: Schema.Attribute.Enumeration<
      ['developer', 'illustrator', 'graphic designer']
    > &
      Schema.Attribute.Required;
    skills: Schema.Attribute.Media<'images', true>;
  };
}

export interface ProfileEducation extends Struct.ComponentSchema {
  collectionName: 'components_profile_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    fieldOfStudy: Schema.Attribute.String;
    institutionName: Schema.Attribute.String & Schema.Attribute.Required;
    startYear: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    groups: Schema.Attribute.Component<'footer.category', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    message: Schema.Attribute.Text;
    socialMedia: Schema.Attribute.Component<'shared.social-media', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionInternSection extends Struct.ComponentSchema {
  collectionName: 'components_section_intern_sections';
  info: {
    displayName: 'Intern Section';
  };
  attributes: {
    interns: Schema.Attribute.Relation<'oneToMany', 'api::intern.intern'>;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_section_project_sections';
  info: {
    displayName: 'Project Section';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_teams';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
    teams: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
  };
}

export interface SectionTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SectionWhatWeDoSection extends Struct.ComponentSchema {
  collectionName: 'components_section_what_we_do_sections';
  info: {
    displayName: 'What We Do Section';
  };
  attributes: {
    jobs: Schema.Attribute.Relation<'oneToMany', 'api::job.job'>;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionWhoWeAreSection extends Struct.ComponentSchema {
  collectionName: 'components_section_who_we_are_sections';
  info: {
    displayName: 'Who We Are Section';
  };
  attributes: {
    internSection: Schema.Attribute.Component<'section.intern-section', false> &
      Schema.Attribute.Required;
    teamSection: Schema.Attribute.Component<'section.team', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'title'>;
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

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface SharedQuotes extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quotes';
  };
  attributes: {
    quotes: Schema.Attribute.Text & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
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

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'paperPlane';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaffProfileInterns extends Struct.ComponentSchema {
  collectionName: 'components_staff_profile_interns';
  info: {
    displayName: 'Interns';
  };
  attributes: {
    interns: Schema.Attribute.Relation<'oneToMany', 'api::intern.intern'>;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.category': FooterCategory;
      'navbar.navbar': NavbarNavbar;
      'navbar.navigation': NavbarNavigation;
      'profile.decoration': ProfileDecoration;
      'profile.detail': ProfileDetail;
      'profile.education': ProfileEducation;
      'section.footer': SectionFooter;
      'section.hero-section': SectionHeroSection;
      'section.intern-section': SectionInternSection;
      'section.project-section': SectionProjectSection;
      'section.team': SectionTeam;
      'section.testimonial-section': SectionTestimonialSection;
      'section.what-we-do-section': SectionWhatWeDoSection;
      'section.who-we-are-section': SectionWhoWeAreSection;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.quotes': SharedQuotes;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.social-media': SharedSocialMedia;
      'staff-profile.interns': StaffProfileInterns;
    }
  }
}
