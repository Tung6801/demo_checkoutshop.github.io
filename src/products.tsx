import imageProduct1 from './assets/images/1.png'
import imageProduct2 from './assets/images/2.png'
import imageProduct3 from './assets/images/3.png'
import imageProduct4 from './assets/images/4.png'
import imageProduct5 from './assets/images/5.png'
import imageProduct6 from './assets/images/6.png'
import imageProduct7 from './assets/images/7.png'
import imageProduct8 from './assets/images/8.png'
export interface product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    slug: string;
}
export const products: product[] = [
    {
        id: 1,
        name: 'Nightwear Top Shop',
        price: 39,
        image: imageProduct1,
        description: 'Donec sed luctus nibh. Cras id dui semper, bibendum nunc et, pharetra diam. Nullam volutpat lacus sed odio laoreet ullamcorper quis cursus urna. Praesent rhoncus, felis ac sodales posuere, massa nulla convallis enim, varius tincidunt diam nibh eu massa.',
        slug: 'Nightwear-Top-Shop'
    },
    {
        id: 2,
        name: 'Bra Set Effects',
        price: 55,
        image: imageProduct2,
        description: 'Donec volutpat lorem vitae mollis laoreet. Duis ac orci sollicitudin, vestibulum velit nec, vulputate velit. Suspendisse potenti. In sit amet scelerisque tortor, at aliquam eros. Etiam ac bibendum sapien, et congue ligula. Nam condimentum rhoncus arcu et rhoncus. Aenean tempus molestie nibh ac lobortis.',
        slug: 'Bra-Set-Effects'
    },
    {
        id: 3,
        name: 'Top Night Secret',
        price: 35,
        image: imageProduct3,
        description: 'Pellentesque adipiscing eu metus at sodales. Etiam bibendum felis et dolor hendrerit convallis. Vivamus tincidunt ultrices aliquam Pellentesque adipiscing eu metus at sodales. Etiam bibendum felis et dolor hendrerit convallis. Vivamus tincidunt ultrices aliquam Pellentesque adipiscing eu metus at sodales. Etiam bibendum felis et dolor hendrerit convallis. Vivamus tincidunt ultrices aliquam.',
        slug: 'Top-Night-Secret'
    },
    {
        id: 4,
        name: 'Sportiva Swing Tee',
        price: 29,
        image: imageProduct4,
        description: 'Aliquam facilisis non ante ac dictum. Fusce a ligula nec neque bibendum rhoncus. Nulla est lectus, eleifend et libero ac, pellentesque sagittis turpis. Donec mattis neque et libero molestie, eu ultricies turpis porttitor. Ut tincidunt, lacus in vestibulum condimentum, turpis orci tincidunt velit, sit amet posuere elit magna vitae sapien. Morbi lacinia arcu orci, in tincidunt arcu mollis sit amet. Vestibulum bibendum risus sed dui venenatis sodales. In a hendrerit erat. Morbi ut interdum orci.',
        slug: 'Sportiva-Swing-Tee'
    },
    {
        id: 5,
        name: 'Scott Sport Painter T-Shirt',
        price: 35,
        image: imageProduct5,
        description: 'Phasellus id accumsan nisl. Maecenas pharetra sed ipsum nec dignissim. Nam pretium at dui a congue. Vestibulum varius auctor felis. Donec dictum sem tellus, vitae hendrerit ante scelerisque vitae. Proin ultricies mollis nunc ac accumsan. Nunc mattis fermentum vulputate. Nulla eleifend rhoncus adipiscing.',
        slug: 'Scott-Sport-Painter-T-Shirt'
    },
    {
        id: 6,
        name: 'Buzz Jean JackJack',
        price: 185,
        image: imageProduct6,
        description: 'In scelerisque risus pellentesque orci bibendum tincidunt. Fusce et lacus vitae erat scelerisque ullamcorper vel a odio. Aenean lobortis bibendum egestas.',
        slug: 'Buzz-Jean-JackJack'
    },
    {
        id: 7,
        name: 'Shuffle Sweater for Teen',
        price: 45,
        image: imageProduct7,
        description: 'Etiam in elit nisi, sed rutrum tellus. In scelerisque risus pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum pellentesque euismod.',
        slug: 'Shuffle-Sweater-for-Teen'
    },
    {
        id: 8,
        name: 'Palm JonesCo Jacket',
        price: 35,
        image: imageProduct8,
        description: 'Aliquam quis ipsum lectus. Nam porttitor erat turpis, eu mollis lacus nam porttitor erat turpis, eu mollis lacus secartum pellentesque orci bibendum.',
        slug: 'Palm-JonesCo-Jacket'
    },
]
