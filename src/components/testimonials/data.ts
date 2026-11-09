// ----------------------------------------------------------------------
// Client testimonials - single source for the home carousel, the About page and
// the service pages (previously copy-pasted into two components).
//
// Quotes stay in the language they were given in (authentic wording); the role
// line is translated through i18n via `roleKey`.
// ----------------------------------------------------------------------

export type TestimonialId = 'selekcija' | 'nearpeer' | 'quantum';

export type Testimonial = {
    id: TestimonialId;
    name: string;
    roleKey: string;
    quote: string;
    image?: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
    {
        id: 'selekcija',
        name: 'Slobodan Jović',
        roleKey: 'testimonial_selekcija_role',
        quote:
            'Suradnja s timom Codage bila je apsolutni užitak! Njihova stručnost u razvoju web aplikacije za tvrtku Selekcija bila je ključna za postizanje visokih standarda. Briljirali su u kreiranju inovativnih rješenja, prilagodbi sučelja i osiguravanju besprijekornog korisničkog iskustva. Svojom posvećenošću i preciznošću u radu s našim programerima znatno su doprinijeli uspjehu našeg projekta. Suradnju preporučujemo svima koji traže pravog stručnjaka u području web razvoja!',
        image: '/assets/images/home/testimonals/slobodan_jovic_selekcija.jpeg',
    },
    {
        id: 'nearpeer',
        name: 'Brian Kulman',
        roleKey: 'testimonial_nearpeer_role',
        quote:
            'Petar Vrkić is a coding expert. Over two years, Petar\'s enhancements consistently raised our EdTech app to new levels of excellence. Petar is an expert in React, JavaScript, AWS, and databases - he had us covered from front-end to back-end. His love of problem-solving and ability to master new technologies helped us take huge strides with SSO, security, and reliability. His constant positivity and can-do attitude made collaborating a wonderful experience. Petar\'s experience and knowledge would be a great asset to any team or project!',
        image: '/assets/images/home/testimonals/brian_kulman_nearpeer.jpeg',
    },
    {
        id: 'quantum',
        name: 'Bruno Batarelo',
        roleKey: 'testimonial_quantum_role',
        quote:
            'Petar se pokazao kao izuzetno vrijedan član tima tijekom suradnje na našim zajedničkim projektima. Njegovo stručno znanje iz područja web i mobilnog razvoja bilo je ključno u stvaranju inovativne web i mobilne aplikacije. Njegova predanost, brza reakcija na izazove i kreativnost doprinijele su uspješnoj implementaciji projekta.',
    },
];

export const getTestimonial = (id: TestimonialId): Testimonial =>
    TESTIMONIALS.find((item) => item.id === id) ?? TESTIMONIALS[0];
