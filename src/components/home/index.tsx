import { useState, useEffect } from 'react';
import avatar from '../../assets/thong.jpg';
import './home.css';

const Home = () => {
    const [activeRole, setActiveRole] = useState('data');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="home">
            <header className="header">
                <div className="custom-container">
                    <div className="header-content">
                        <img src={avatar} alt="Ngô Hồng Thông" className="header-image" />
                        <div className="header-info">
                            <h1>Ngô Hồng Thông</h1>
                            <div className="role-switcher">
                                <button 
                                    className={`role-btn ${activeRole === 'data' ? 'active' : ''}`}
                                    onClick={() => setActiveRole('data')}
                                >
                                    Data Engineer
                                </button>
                                <button 
                                    className={`role-btn ${activeRole === 'software' ? 'active' : ''}`}
                                    onClick={() => setActiveRole('software')}
                                >
                                    Software AI
                                </button>
                            </div>
                            <div className="cv-download">
                                <a 
                                    href={activeRole === 'data' ? "/NgoHongThong_0425_DE.pdf" : "/NgoHongThong_0425_SE_AI.pdf"} 
                                    download 
                                    className="download-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                    Download {activeRole === 'data' ? 'Data Engineer' : 'Software AI'} CV
                                </a>
                            </div>
                            <div className="social-links">
                                <a href="tel:+84345223056" aria-label="Phone">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </a>
                                <a href="mailto:baphongpine@gmail.com" aria-label="Email">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/ngo-thong-222138246" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/ngohongthong1832004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="about-info">
                                <p className="location">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    Ho Chi Minh City, Vietnam
                                </p>
                                <p className="education">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                    </svg>
                                    Industrial University of Ho Chi Minh City (IUH) - Data Science (3.29/4.0)
                                </p>
                                <p className="statement">
                                    {activeRole == "data" ? 
                                    "Looking for a data internship to apply my skills in data engineering. Highly self-motivated and adept at self-learning, aiming to contribute and develop in a dynamic setting." 
                                    : "Looking for a software AI internship to apply my skills in software AI. Highly self-motivated and adept at self-learning, aiming to contribute and develop in a dynamic setting."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="custom-container">
                {/* Experience Section */}
                <section className="experience-section skills-section">
                    <h2 className='experience-title'>Experience</h2>
                    <div className="experience-grid">
                        <div className="experience-card">
                            <div className="experience-info">
                                <h3>
                                    AI-Engineer intern
                                    <span className="company">Bluebolt-Software/Back-end</span>
                                    <span className="date">Dec 2024 – Now</span>
                                </h3>
                                <ul className="experience-highlights">
                                    <li>Collecting data from multiple sources, including web scraping and API integration.</li>
                                    <li>Designing and optimizing APIs to improve website functionality, enhance data retrieval speed, and boost backend performance.</li>
                                    <li>Integrating tools like Kafka to build a scalable data collection and processing system.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience-card">
                            <div className="experience-info">
                                <h3>
                                    Software Engineer Intern
                                    <span className="company">IX-Health/Front-end</span>
                                    <span className="date">Mar 2024 – Nov 2024</span>
                                </h3>
                                <ul className="experience-highlights">
                                    <li>Developing and optimizing the user interface for a fitness studio application and landing page.</li>
                                    <li>Collaborating on integrating AI models to enhance personalized user experiences.</li>
                                    <li>Contributing to the overall performance optimization and user experience, making the product more engaging and effective for end-users.</li>
                                    <li>Focused on building user-friendly features and ensuring compatibility across different platforms and devices.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        {activeRole === 'data' ? (
                            <>
                                <div className="skill-category">
                                    <h3>Data Engineering</h3>
                                    <ul className="skill-list">
                                        <li>Apache Spark</li>
                                        <li>Apache Kafka</li>
                                        <li>Apache Airflow</li>
                                        <li>Docker</li>
                                        <li>Python</li>
                                        <li>Java</li>
                                    </ul>
                                </div>
                                <div className="skill-category">
                                    <h3>Databases</h3>
                                    <ul className="skill-list">
                                        <li>PostgreSQL</li>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>ClickHouse</li>
                                        <li>SQLite</li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="skill-category">
                                    <h3>AI/ML</h3>
                                    <ul className="skill-list">
                                        <li>TensorFlow</li>
                                        <li>PyTorch</li>
                                        <li>Hugging Face</li>
                                        <li>Scikit-learn</li>
                                        <li>Pandas</li>
                                        <li>NumPy</li>
                                    </ul>
                                </div>
                                <div className="skill-category">
                                    <h3>Web Development</h3>
                                    <ul className="skill-list">
                                        <li>React</li>
                                        <li>Django</li>
                                        <li>Node.js</li>
                                        <li>FastAPI</li>
                                        <li>TypeScript</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="projects-section">
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">
                        {activeRole === 'data' ? (
                            <>
                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Chatbot-Finacial-Langgraph
                                            <a href="https://github.com/ngohongthong1832004/chatbot-finacial-langgraph" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>The core architecture using LangGraph to orchestrate a multi-step reasoning workflow.</li>
                                            <li>The hybrid RAG (Retrieval-Augmented Generation) system that combines FAISS vector store retrieval, SQL database integration, and web search capabilities.</li>
                                            <li>The intelligent decision-making process that determines the best information source.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">LangGraph</span>
                                                <span className="tool-tag">OpenAI</span>
                                                <span className="tool-tag">Google Gemini</span>
                                                <span className="tool-tag">FAISS</span>
                                                <span className="tool-tag">SentenceTransformer</span>
                                                <span className="tool-tag">PostgreSQL</span>
                                                <span className="tool-tag">Pydantic</span>
                                                <span className="tool-tag">Tavily Search API</span>
                                                <span className="tool-tag">Docker</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Social-Media-Sentiment-Pipeline
                                            <a href="https://github.com/ngohongthong1832004/Social-Media-Sentiment-Pipeline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Engineered a fully Docker‑composed data pipeline for real‑time & batch sentiment analysis on social‑media data (YouTube, TikTok, Facebook) using ETL & Streaming architectures.</li>
                                            <li>Orchestrated workflows in Apache Airflow; ingested streaming data via Kafka; performed cleaning & prediction with Spark Structured Streaming and predict with huggingface model; validated outputs with Great Expectations.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Docker Compose</span>
                                                <span className="tool-tag">Apache Airflow</span>
                                                <span className="tool-tag">Kafka</span>
                                                <span className="tool-tag">Spark</span>
                                                <span className="tool-tag">Huggingface</span>
                                                <span className="tool-tag">Great Expectations</span>
                                                <span className="tool-tag">MinIO</span>
                                                <span className="tool-tag">Hive</span>
                                                <span className="tool-tag">MariaDB</span>
                                                <span className="tool-tag">Trino</span>
                                                <span className="tool-tag">Superset</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Tiki E-Commerce
                                            <a href="https://github.com/ngohongthong1832004/E_Commerce" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Scraped data from Tiki using Apache Airflow.</li>
                                            <li>Performed ETL (Extract, Transform, Load) processes with Kafka to process the scraped data.</li>
                                            <li>Streamed processed data into PostgreSQL using Kafka.</li>
                                            <li>Configured and maintained PostgreSQL to ensure system stability and performance.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Docker</span>
                                                <span className="tool-tag">Apache Airflow</span>
                                                <span className="tool-tag">Kafka</span>
                                                <span className="tool-tag">PostgreSQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Streaming-kafka-spark-redshift
                                            <a href="https://github.com/ngohongthong1832004/streaming-kafka-spark-redshift" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>A complete real-time data pipeline that streams data from Apache Kafka, processes it with PySpark, and stores it in Amazon Redshift.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Apache Kafka</span>
                                                <span className="tool-tag">PySpark</span>
                                                <span className="tool-tag">Amazon Redshift</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            CDC-Postgres-Kafka-ClickHouse
                                            <a href="https://github.com/ngohongthong1832004/CDC-Postgres-Kafka-ClickHouse" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Real-time + batch data platform: FastAPI API layer, PostgreSQL transactional DB, ClickHouse OLAP, Kafka + Debezium for CDC streaming, Airflow for scheduled ETL—all Docker‑Compose powered.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">FastAPI</span>
                                                <span className="tool-tag">PostgreSQL</span>
                                                <span className="tool-tag">ClickHouse</span>
                                                <span className="tool-tag">Kafka</span>
                                                <span className="tool-tag">Debezium</span>
                                                <span className="tool-tag">Airflow</span>
                                                <span className="tool-tag">Docker Compose</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Tiki E-Commerce
                                            <a href="https://github.com/ngohongthong1832004/React-Django-Postgresql" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Scraped data from Tiki using Apache Airflow.</li>
                                            <li>Performed ETL (Extract, Transform, Load) processes with Kafka to process the scraped data.</li>
                                            <li>Streamed processed data into PostgreSQL using Kafka.</li>
                                            <li>Configured and maintained PostgreSQL to ensure system stability and performance.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Docker</span>
                                                <span className="tool-tag">Apache Airflow</span>
                                                <span className="tool-tag">Kafka</span>
                                                <span className="tool-tag">PostgreSQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Student Dormitory Management System
                                            <a href="https://github.com/ngohongthong1832004/quanly-sinhvien" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Developed a comprehensive student dormitory management system with features including student, house, and room management; duty scheduling (kitchen, reading, cleaning); request handling; blog/announcement posting; and registration forms.</li>
                                            <li>Designed RESTful APIs using Node.js (Express) and MongoDB, with JWT authentication and role-based access control (Admin, Head, Deputy, Manager,Member).</li>
                                            <li>Built a modern frontend with React and Material UI, supporting dashboards, search/filter, Excel import/export, and image uploads.</li>
                                            <li>Integrated Docker for containerization, Swagger for API documentation, and CI/CD with Docker Compose.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Node.js</span>
                                                <span className="tool-tag">Express</span>
                                                <span className="tool-tag">MongoDB</span>
                                                <span className="tool-tag">React</span>
                                                <span className="tool-tag">Material UI</span>
                                                <span className="tool-tag">Docker</span>
                                                <span className="tool-tag">Swagger</span>
                                                <span className="tool-tag">JWT</span>
                                                <span className="tool-tag">RESTful API</span>
                                                <span className="tool-tag">Cloudflare</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            Movie Management Web Application
                                            <a href="https://github.com/ngohongthong1832004/quanly-sinhvien" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Developed a full-stack movie management web application supporting user authentication, movie CRUD operations, and search functionality.</li>
                                            <li>Designed RESTful APIs using Django REST Framework and PostgreSQL, with token-based authentication and role-based access (Admin, Staff, User).</li>
                                            <li>Built a modern frontend with React and Tailwind CSS, featuring dashboards, search/filter, and responsive UI.</li>
                                            <li>Integrated Docker for containerization and Nginx for static file serving; provided scripts for easy deployment.</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Django</span>
                                                <span className="tool-tag">Django REST Framework</span>
                                                <span className="tool-tag">PostgreSQL</span>
                                                <span className="tool-tag">React</span>
                                                <span className="tool-tag">Tailwind CSS</span>
                                                <span className="tool-tag">Docker</span>
                                                <span className="tool-tag">Nginx</span>
                                                <span className="tool-tag">RESTful API</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>     
                                                       
                                <div className="project-card">
                                    <div className="project-info">
                                        <h3>
                                            WEB IUH lab
                                            <a href="https://main.aiclubiuh.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                        </h3>
                                        <ul className="project-highlights">
                                            <li>Created a web application for student clubs, events, and articles management with user authentication, event scheduling, and content management to streamline registration and improve communication.</li>
                                            <li>Team size: 3</li>
                                            <li>Role: Back-end, Consultant Front-end</li>
                                        </ul>
                                        <div className="project-tools">
                                            <h4>Tools Used:</h4>
                                            <div className="tools-list">
                                                <span className="tool-tag">Django</span>
                                                <span className="tool-tag">React</span>
                                                <span className="tool-tag">PostgreSQL</span>
                                                <span className="tool-tag">Restful API</span>
                                                <span className="tool-tag">Axios</span>
                                                <span className="tool-tag">Sass</span>
                                                <span className="tool-tag">Bootstrap</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                </section>

                {/* Publications Section */}
                <section className="publications-section">
                    <h2>Publications</h2>
                    <div className="publications-grid">
                        <div className="publication-card">
                            <div className="publication-info">
                                <h3>
                                    YSC-2024
                                    <span className="publication-title">Building curriculum management software for Industrial University of Ho Chi Minh city</span>
                                </h3>
                            </div>
                        </div>
                        <div className="publication-card">
                            <div className="publication-info">
                                <h3>
                                    SRW-2024
                                    <span className="publication-title">Xây dựng các thuật toán tối ưu dựa vào quần thể cho bài toán phân công lịch giảng dạy</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scholarship Section */}
                <section className="scholarship-section">
                    <h2>Achievements</h2>
                    <div className="scholarship-card">
                        <div className="scholarship-info">
                            <h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                </svg>
                                Full Scholarship semester - 2024-2025
                            </h3>
                            <p>Industrial University of Ho Chi Minh City (IUH)</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Scroll to Top Button */}
            <button 
                className={`scroll-top-btn ${showScrollTop ? 'show' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style={{ transform: 'rotate(180deg)' }}>
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </div>
    );
};

export default Home;