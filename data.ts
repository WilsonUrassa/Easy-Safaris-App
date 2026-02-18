
import { Zone, Park } from './types';

export const ZONES: Zone[] = [
  {
    id: 'northern',
    name: 'Northern Zone',
    regions: 'Arusha, Manyara, Kilimanjaro, Tanga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUgMRDYcOAMvmzn56Bmz24YlZJI6EgO-EDUb7DDSg8sRJwnN_o7YcGxmTxeb17ABB1xXIfiJs7rc80h1veeYeKkw7-9Xq5hu0NIHZFap4oTCGqzFrVz13GvIPfo_EKqcPTOlvw3BaWC7jWEdEX2HshrV-rSch-4GcrsHb3M55l0sk1nNJjaIM9gVrk5h6j4hAwvuRjIanIvvStMqAdj99x98_CdOYaouw8qdLemXPWQZGZoNrzsDifYPeGdrOvJYZppvEupmpogA',
    tagline: 'Iconic Wildlife & Peaks',
    highlights: ['Big Five', 'The Migration', 'Mount Kilimanjaro']
  },
  {
    id: 'southern',
    name: 'Southern Zone',
    regions: 'Ruaha, Mikumi, Iringa, Mbeya',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf2de1VLg4ftf4M6v6ubxl9G2N_4xcpbvw2Ia4AO1BHjfW_KI26Y79wH7PrGCK6vLwffqVvcaM13H4nFEqxBNoJNdi0UuSjMHY_2Rdd2rthRj8TX_GWQrgP_gkc8Y5UJznV9uhHGdRKAy6aZYo5lBy5SFrD_xECcjOeN0F0KBGJ39kHHueZSjwJ9H-wZBdjMJwRvpqd2VG8AK2FI3AEDDd7mAfPQ8dLOmdU7Kab9v_Hshmx8_qrEyN6NJEQ8L5JfmVD3UbN6bNLA',
    tagline: 'Wild Frontiers',
    highlights: ['Ruaha', 'Udzungwa Mountains', 'Nyerere (Selous)']
  },
  {
    id: 'eastern',
    name: 'Eastern Zone',
    regions: 'Zanzibar, Dar es Salaam, Pwani, Morogoro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8ohFYK_L41xen-I6lZZGnuTG497JMXyXf7q41YNY8yQWF5sfwz6KC5aKGc_0MJ526-bRKdVeN4PI9YwMGd0u0RW4-sxniuzjeZkYi7z3gkcRFypfvFBL6N9dOxTbqDYwYKPsu-M5y6LOxvvw0YG3g5p7pRiAb4vc0OcvQtKJLpCOjyYDMFaaPNe5fI1Yw62kbKatcfDEOf_aGZZhfuTQJ9--mQii9tR3lVPFOcnq85jCQQfDJqpvSOW21IhPxUB6w5BIuyuEzww',
    tagline: 'Beaches & Coastal Safaris',
    highlights: ['Zanzibar Archipelago', 'Saadani National Park', 'Mikumi']
  },
  {
    id: 'western',
    name: 'Western Zone',
    regions: 'Gombe, Mahale, Kigoma, Katavi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRmu0SU7TPLLdlu1wAv6dZ3U56gi1m_7ntVl8tWxIBwfNNgweZXqE2kjPUS7B5C84aFzu3hlnKedtxZrluhL_8Xew9wvlCjlBV301cnaC8GgHdnl5mu93jFY9goa9ZPNIn9utjU-DD-RQ-uQoTTTWxdv-ECDPge4C1UgZwno8rAfnEIO-wGjNrz4KNV04HKLjZ11AhuMgrSikQQvoHWeM2PSk5aFY0gF6g49o5tqobtHOI1UmdvhsxvRYcYkYj6IskBweUgGSNaw',
    tagline: 'Primates & Pristine Lakes',
    highlights: ['Gombe Stream', 'Mahale Mountains', 'Chimp Trekking']
  }
];

export const PARKS: Park[] = [
  {
    id: 'serengeti',
    name: 'Serengeti National Park',
    zone: 'northern',
    description: '"Endless Plains" — Witness the world\'s largest overland migration of wildebeest and zebra.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQnO8etcHP44W9Om9KaRkmEu0bRERZjbi_kSXWluAe6vMd-mGt4cwlZg0NXIhKK01sQfKoFezjLdpbqiRBeFoMCum73sQFFgDC29-rz0sPlPiKyln9p0mGVCWKQSa7WwqKz4IrstCGfsFx_G2ZArt619JnZ9THnnHy_MrKtYCdwHYn4zbEqd-wjYenmcuVl4WoqMuKY4p8Y8vUS-dmOts6Nn6zQZP9s2_yORXJ9qdk8TNxK1OOZ6gxF1oeNTOk2T4M6lRayCgyvw',
    tags: ['Top Rated', 'The Migration'],
    elevation: '920m - 1.8km',
    bestTime: 'June - Oct',
    rating: '4.9',
    statusIcon: 'verified',
    statusText: 'UNESCO Heritage Site'
  },
  {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro',
    zone: 'northern',
    description: 'The highest peak in Africa. Embark on a legendary trek through five distinct climate zones.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrjhMyGNycjvZxUqkc4vu_Vd20zL3Km_UGqid44lWxKc-HfU4pWcAb8zQkm0CPdf3VwBq2enPWoP4SedM40vP75uf1yg2FghE3wFT4i87DJ-mzrrxNflkkvAcwpIU5d4aS6rb9DqleU7weFPm0zlZd0qosItoi5ps_NrzZ-TxgeMr-YFqlBdG1sxIRPXF3JGd-pvHH0Os5d8CKW7ew_epPiiJL1gXteALwMJTy9UGMGLjYUHOUrPyNlf1RxR3RHWMq8w22kAQEA',
    tags: ['Adventure', 'Roof of Africa'],
    elevation: '5,895m',
    bestTime: 'Jan-Mar, Jun-Oct',
    statusIcon: 'landscape',
    statusText: '5,895m Elevation'
  },
  {
    id: 'ruaha',
    name: 'Ruaha National Park',
    zone: 'southern',
    description: 'Tanzania\'s largest park, a predator haven where the Great Ruaha River draws majestic giants.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB039xm1CAZDsngUfkg-pk4HiIaLzl3A6cRThEGHXs6OwNGvRLf2MqrvJ7TGk9OtK-QDO75tmCzL75gIlJMMk24h7YfcjZsXwMRLZe2cfKfBYEN57-3feyHeZ42QtgL1UJUc3kVI9P3kg9wlfdkYvE41XayFybRgXxf0qdxxH9yMtzbBysmVIFe5GXzqD_vSc0m10ni6YFmHo84_peAlJraJWN35G1XRNLOgnQGt6-Dw3cLXTP9XLNZYa1xFUTlHbnvRSSPsM2amQ',
    tags: ['Wilder Safari', 'Predator Haven'],
    elevation: '750m - 1.9km',
    bestTime: 'June - Oct',
    statusIcon: 'potted_plant',
    statusText: 'Predator Haven'
  },
  {
    id: 'saadani',
    name: 'Saadani National Park',
    zone: 'eastern',
    description: 'Where bush meets the beach - the only wildlife sanctuary in East Africa with an Indian Ocean beachfront.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYyAtR2i_HntrXLyaQkQgh6r-PepeXt5xE4XGox8XLVcEP470pCoRkKgyomRcEGszCn5m5lhrER3iJ25pPMer-1ouNOYuSP3gjXH4Fpbpw3Ju6Low_ov10p5H6azkhygkoW3UaxNpdc8hW7TIW_XwA34ljGmFPBu5Z7kFjvMKO640prCPFJgRM3gCJFwNAI1ZchjNzVg8BtSpt4nv9SMuS6kOp8488kw4EBQqJbtCYpnlCTvSWKHpAsESpZ5yXL5B20H-qQ6D-IQ',
    tags: ['Coastal Beauty', 'Beach & Bush'],
    elevation: '0 - 350m',
    bestTime: 'Jan-Feb, Jun-Aug',
    statusIcon: 'beach_access',
    statusText: 'Coastal Paradise'
  }
];
