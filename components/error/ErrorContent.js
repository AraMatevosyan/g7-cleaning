import React from 'react';
import Link from 'next/link';

const ErrorContent = () => {
    return (
        <>
            <section class="error-page">
				<div class="container">
					<div class="row">
						<div class="col-xl-12">
							<div class="error-page__wrapper text-center">
								<div class="error-page__content">
									<h2>404</h2>
									<h3>Opps! Page Not Found</h3>
									<p>Sorry, but the page you are looking for does not exist.</p>
									<div class="btn-box">
										<Link href="/public" class="thm-btn">
											<span>Go To Home</span>
											<div class="liquid"></div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

export default ErrorContent;
