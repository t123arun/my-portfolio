export default function ProjectsSlider() {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <img
            alt="E-commerce Platform"
            className="w-full h-56 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAriYnHqMamtHQMhynyRXnagH_GUsL_Io1i5nCwXzQwPPSBs3_VZVEJd7H8ErUUj1XkAe80kQCiNz6PtqYM57KHQ2-xAqxA8Iox3-kM5vgdOUsS1I9AmyUHmp9XbnUVYUy71GQiVAfRtfTTOwC-T7UqSpTXH4eb060MPZ9v5z5LlSykicx814ivsPxOxq98gwKFu-yBdIrfnhxbm3eginy1Q-zVRqdigE1o7fsvrwIJxHc84H0QLIT3Mk427F2OXFkvDez7x-ISaVA"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
            <p className="text-subtext-light dark:text-subtext-dark text-sm">
              A full-featured e-commerce platform with user authentication,
              product management, and payment integration.
            </p>
          </div>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <img
            alt="Social Media App"
            className="w-full h-56 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEOPMkIdJ4gvihy9dZnLrST1ZYOzxALotJ3x9mmsPZzhIdgzeI9xut5rh35-kXSkPZOCTOXM2kDS3b2azRhpIvgvmbEUidubQLGW3iUeJHDrcsBFiBJX4rF1tYMB7D55OUxfApey4rTfIsus_U9WRv7Wp6QXMJHRcwDyUcFHwqd6bOevzSqGNyzzYOBK7pYCAmWanWqVAl_vfsIAGgF_b7Wzjgtez1I4Lo7h6Q7pGfNRmFPedVRL8_s1M8gKEhEJq2yheWNEpkMYc"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Social Media App</h3>
            <p className="text-subtext-light dark:text-subtext-dark text-sm">
              A social media application with user profiles, posts, and
              real-time updates.
            </p>
          </div>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <img
            alt="Task Management System"
            className="w-full h-56 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOzVVyFow1jeZ_fDW83LKBw-92GU7TKEy2lvnlE0rHXFoAwt6-hrZnFOa15ToEm62vassq4stltKjoAYYxEfBqkV2oTDH5aavt3MhnqAuGzghkzaYYMqXxLRppA5IuPgjI_C_17UZX65_oY2tOwDCw5BHmQU6xfIpDuF6GdJrilT7zipRoZE_9PNlLG_aOybjEo6Fc_wfrEHePDpD2_vL_49peAGXiWol3uKiUaTDfCt_5P2G4wfScvbbDaeAfmucuHb-CZHpy1p0"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Task Management System</h3>
            <p className="text-subtext-light dark:text-subtext-dark text-sm">
              A task management system with drag-and-drop functionality and
              collaborative features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
