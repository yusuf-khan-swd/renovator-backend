import { AboutUs } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAboutUs = async (data: AboutUs): Promise<AboutUs> => {
  return await prisma.aboutUs.create({ data });
};

const getAllAboutUs = async (): Promise<AboutUs[]> => {
  return await prisma.aboutUs.findMany();
};

const getSingleAboutUs = async (id: string): Promise<AboutUs | null> => {
  return await prisma.aboutUs.findUnique({
    where: { id },
  });
};

const updateAboutUs = async (
  id: string,
  data: Partial<AboutUs>
): Promise<AboutUs | null> => {
  return await prisma.aboutUs.update({
    where: { id },
    data,
  });
};

const deleteAboutUs = async (id: string): Promise<AboutUs | null> => {
  return await prisma.aboutUs.delete({ where: { id } });
};

export const AboutUsService = {
  createAboutUs,
  getAllAboutUs,
  getSingleAboutUs,
  updateAboutUs,
  deleteAboutUs,
};
