import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => <main>{children}</main>;

export default PublicLayout;
