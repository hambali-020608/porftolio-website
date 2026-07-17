import { adminDb } from "../lib/firebase_admin";


export async function getSkillsAndTechStack() {
  try {
    const [skillsSnap, techSnap] = await Promise.all([
      adminDb.collection("skills").get(),
      adminDb.collection("tech_stack").get()
    ]);

    const skills = skillsSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    const techStack = techSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return { skills, techStack };
  } catch (error) {
    console.error("Error saat menjalankan getSkillsAndTechStack:", error);
    throw new Error("Gagal mengambil data dari Firestore");
  }
}

export async function getCertificates(){
    try{
const snapshot = await adminDb.collection('certificates').get()
    const certificates = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return certificates;

    } catch (error) {
    console.error("Error saat menjalankan getCertificates:", error);
    throw new Error("Gagal mengambil data certificates dari Firestore");
    }

}

export async function getActiveProjects() {
  try {
    const snapshot = await adminDb
      .collection("projects")
      .where("status", "==", "active") // Filter data di sisi server
      .get();
    
    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return projects;
  } catch (error) {
    console.error("Error saat menjalankan getActiveProjects:", error);
    throw new Error("Gagal mengambil data projects dari Firestore");
  }
}
