'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Services from '@/app/component/common/services/page';

interface Service {
  icon: string;
  text: string;
  description: string;
  alt: string;
}

const HomePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/serviceone.json');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Services services={services} />
    </div>
  );
}

export default HomePage;
