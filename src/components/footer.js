import React from 'react';
import '../static/css/footer.css';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-column footer-about">
					<h3 className="footer-title">SMK Negeri 7 Semarang</h3>
					<p className="footer-description">
						SMK Negeri 7 Semarang adalah salah satu sekolah kejuruan negeri terbesar di Kota Semarang, 
						berdiri sejak 7 Juni 1971 dan berlokasi di Jl. Simpang Lima, Mugassari, Semarang yang 
						memiliki reputasi A dan dikenal sebagai lembaga pendidikan vokasi yang profesional, mandiri, 
						serta berkarakter. Dengan jumlah siswa lebih dari dua ribu, SMKN 7 Semarang menawarkan berbagai 
						kompetensi keahlian seperti Sistem Informasi Jaringan dan Aplikasi, Kontruksi Gedung, Elektronika, 
						Mekatronika, Otomatif, Hingga Fabrikasi Logam.
					</p>
				</div>
				
				<div className="footer-column footer-contact">
					<h3 className="footer-title">Find us</h3>
					<div className="footer-contact-items">
						<div className="footer-contact-item">
							<svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span className="footer-contact-text">Simpang Lima street</span>
						</div>
						
						<div className="footer-contact-item">
							<svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span className="footer-contact-text">anomalisia@gmail.com</span>
						</div>
						
						<div className="footer-contact-item">
							<svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22 16.92V19.92C22 20.49 21.54 20.97 20.97 21C20.72 21.01 20.46 21.02 20.21 21.02C10.2 21.02 2 12.82 2 2.81C2 2.56 2.01 2.3 2.02 2.05C2.05 1.48 2.53 1.02 3.1 1.02H6.1C6.6 1.02 7.01 1.39 7.07 1.88C7.13 2.39 7.23 2.89 7.38 3.38C7.51 3.78 7.4 4.22 7.11 4.51L5.62 6C7.06 8.87 9.15 10.96 12.02 12.4L13.51 10.91C13.8 10.62 14.24 10.51 14.64 10.64C15.13 10.79 15.63 10.89 16.14 10.95C16.64 11.01 17.01 11.42 17.01 11.92V14.92C17.01 15.47 16.57 15.92 16.02 15.92C15.77 15.92 15.51 15.91 15.26 15.9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span className="footer-contact-text">+62 12345678</span>
						</div>
					</div>
				</div>
				
				<div className="footer-column footer-social">
					<h3 className="footer-title">Social media</h3>
					<div className="footer-social-icons">
						<a href="#" className="footer-social-link">
							<svg className="footer-social-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z"/>
							</svg>
						</a>
						
						<a href="#" className="footer-social-link">
							<svg className="footer-social-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"/>
							</svg>
						</a>
						
						<a href="#" className="footer-social-link">
							<svg className="footer-social-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
								<path d="M23.498 6.186C23.2855 5.39964 22.8641 4.68533 22.2782 4.11631C21.6923 3.54729 20.9644 3.14524 20.169 2.954C18.443 2.5 12 2.5 12 2.5C12 2.5 5.557 2.5 3.831 2.954C3.03557 3.14524 2.30774 3.54729 1.72181 4.11631C1.13587 4.68533 0.714474 5.39964 0.502 6.186C0.166541 7.87322 -0.00193741 9.58849 3.42268e-05 11.307V12.693C-0.00193741 14.4115 0.166541 16.1268 0.502 17.814C0.714474 18.6004 1.13587 19.3147 1.72181 19.8837C2.30774 20.4527 3.03557 20.8548 3.831 21.046C5.557 21.5 12 21.5 12 21.5C12 21.5 18.443 21.5 20.169 21.046C20.9644 20.8548 21.6923 20.4527 22.2782 19.8837C22.8641 19.3147 23.2855 18.6004 23.498 17.814C23.8335 16.1268 24.0019 14.4115 24 12.693V11.307C24.0019 9.58849 23.8335 7.87322 23.498 6.186ZM9.75 15.568V8.432L15.818 12L9.75 15.568Z"/>
							</svg>
						</a>
					</div>
					<p className="footer-social-text">Follow us for more updates in the future</p>
				</div>
			</div>
			
			<div className="footer-bottom">
				<p className="footer-copyright">Copyright © 2025 SMK Negeri 7 Semarang; Designed by Kelompok 7</p>
			</div>
		</footer>
	);
}

export default Footer;
