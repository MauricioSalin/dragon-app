import { parse } from 'date-fns';

export const getDragonDetail = {
  water: {
    name: 'Água',
    icon: '/water.png',
  },
  earth: {
    name: 'Terra',
    icon: '/earth.png',
  },
  fire: {
    name: 'Fogo',
    icon: '/fire.png',
  },
  air: {
    name: 'Ar',
    icon: '/air.png',
  },
};

export const formatDate = (date: Date): string => {
  let currentDate = new Date(date);
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (regex.test(date.toString())) {
    currentDate = parse('24/01/2024', 'dd/MM/yyyy', new Date());
  }

  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    currentDate
  );
};
