import "./mine.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Mine() {
    return (
        <div className="contener">
            <div>
                <ul className="project-filter-list">
    <li className="filter-item"><a href="#">all projects</a></li>
    <li className="filter-item"><a href="#">HTML5 & CSS3</a></li>
    <li className="filter-item"><a href="#">JavaScript</a></li>
    <li className="filter-item"><a href="#">react & mui</a></li>
    <li className="filter-item"><a href="#">Node.js & Express</a></li>
</ul>
            </div>
            <div>
               <article className="card-projct">
    <img src="https://imgs.search.brave.com/O39ocSBZRpVM93ongIOd6vsVfqjwsHyThaxxfYukbT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/M2Q0NjIxNTZlZGEz/NjczMjE0YTI4Yy8x/NjgxNzM3MjkwMjM1/LUE0NExKNUozUFBK/MjhBU1MyWTNULzIw/MjItMDYtMDFfMDgt/MDYtNTMucG5n" alt="Project Name" />
    <div className="card-content">
        <h3>عنوان المشروع</h3>
        <p>وصف قصير ومختصر للمشروع هنا...</p>
    </div>
    
    <footer className="card-footer">
        <div className="card-icons">
            <a href="#"><i class="fas fa-link"></i></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <a href="#" className="more-link">More →</a>
    </footer>
</article>
<article className="card-projct">
    <img src="https://imgs.search.brave.com/6CW83H2tdB4NHOS_OTSIm6gdPvinWupqifYq3780zd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/M2Q0NjIxNTZlZGEz/NjczMjE0YTI4Yy8x/NjgxNzM3MjkwMjUx/LU45OVFNV1ZDSDAz/SzNKSlhZM1Q4LzIw/MjItMDYtMDFfMDgt/MDgtNDcucG5n" alt="Project Name" />
    <div className="card-content">
        <h3>عنوان المشروع</h3>
        <p>وصف قصير ومختصر للمشروع هنا...</p>
    </div>
    
    <footer className="card-footer">
        <div className="card-icons">
           <a href="#"><i class="fas fa-link"></i></a>
           <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <a href="#" className="more-link">More →</a>
    </footer>
</article>
<article className="card-projct">
    <img src="https://imgs.search.brave.com/YefClUCYIWeRt6pAeKjtWTagq44aEqAMSx2EAhUFe9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/M2Q0NjIxNTZlZGEz/NjczMjE0YTI4Yy8x/NjgxNzM3MjkwMzA4/LUdJRzBLWUxWUlhB/WEVJWk1TQjRELzIw/MjItMDYtMDFfMDgt/MTgtNDAucG5n" alt="Project Name" />
    <div className="card-content">
        <h3>عنوان المشروع</h3>
        <p>وصف قصير ومختصر للمشروع هنا...</p>
    </div>
    
    <footer className="card-footer">
        <div className="card-icons">
            <a href="#"><i class="fas fa-link"></i></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <a href="#" className="more-link">More →</a>
    </footer>
</article>
<article className="card-projct">
    <img src="https://imgs.search.brave.com/5Blwb_QhTaQrPht_rUIozKtr7nWQN75hokbhsWDpdQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/M2Q0NjIxNTZlZGEz/NjczMjE0YTI4Yy8x/NjgxNzM3MjkwMjU1/LTcyTldLSFZRUkRY/OTNXMjNDRzhXLzIw/MjItMDYtMDFfMDgt/MDktMzgucG5n" alt="Project Name" />
    <div className="card-content">
        <h3>عنوان المشروع</h3>
        <p>وصف قصير ومختصر للمشروع هنا...</p>
    </div>
    
    <footer className="card-footer">
        <div className="card-icons">
            <a href="#"><i class="fas fa-link"></i></a>
           <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <a href="#" className="more-link">More →</a>
    </footer>
</article>
            </div>
        </div>
    );
}