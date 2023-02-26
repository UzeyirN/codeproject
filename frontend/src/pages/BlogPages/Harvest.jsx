import React from 'react'
import '../../styles/BlogPages/BlogPages.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Harvest = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <>
            <Helmet>
                <title>Harvest</title>
            </Helmet>

            <div className='blog-pages__top'>
                <span>
                    <p className='lato-font blog-pages-nav' style={{ color: "gray" }}><span style={{ color: "RGB(176, 151, 109)" }}>Home</span>
                        <span style={{ color: "RGB(176, 151, 109)" }}> / Blog</span> / When is a vineyard ready for harvest?</p>
                </span>
            </div>

            <div className="container">
                <div className="blog-pages__wrapper">
                    <div className='blog-pages-content'>
                        <Link className='blog-pages__link playfair-font' to='' >When is a vineyard ready for harvest?</Link>
                        <p className='lato-font' style={{ color: "RGB(176, 151, 109)" }}>15th Feb 2014</p>
                        <Link to='winery'>
                            <img className='blog-pages__img' style={{ width: "100%", height: "100%" }} src="https://cdn11.bigcommerce.com/s-qbep6rt4nh/images/stencil/9999x9999/uploaded_images/blog-post-1.jpg?t=1489066679" alt="" />
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus posuere mattis. Suspendisse venenatis massa in mattis condimentum. Vivamus porta, tellus vel ultricies facilisis,
                            dolor arcu gravida leo, at commodo tellus tellus nec sapien. Suspendisse potenti.</p>

                        <p>
                            Nam efficitur, ligula vel ultrices feugiat, sapien sem euismod magna, eu maximus libero odio quis leo. Suspendisse ut enim porttitor, ultrices mauris eget, pretium enim. Aliquam vulputate
                            sapien at urna tempor mollis. Fusce a ultrices justo. Curabitur sit amet nunc urna. Proin imperdiet nec felis et dictum. Nam id justo consequat, rhoncus ante aliquet, sodales ex. Morbi porta
                            dui scelerisque ultricies tincidunt. Aliquam erat volutpat. Proin vitae turpis lectus. Nulla non nisi magna. Etiam sit amet nisi in massa dignissim tincidunt et vitae tortor.
                        </p>

                        <p>
                            Sed sodales eu ligula nec hendrerit. Sed id diam est. Proin ullamcorper sem non justo ullamcorper sodales. Nulla tincidunt, turpis eu efficitur accumsan, sem felis bibendum nisl, sed interdum
                            lectus nulla in lectus. Mauris gravida metus quis pharetra tincidunt. Nulla facilisis nisi nec libero interdum, a interdum dolor consequat. Aliquam pharetra arcu sit amet massa ullamcorper pulvinar.
                            Integer pharetra risus nec ultrices tempor. Maecenas dapibus nunc nec nibh sagittis rutrum. Curabitur sollicitudin leo a lectus scelerisque dapibus. Etiam ornare finibus mi ullamcorper vulputate. Donec viverra libero justo,
                            ut pulvinar metus aliquam quis. Pellentesque consequat erat nec molestie dignissim. Suspendisse nec metus fermentum, pulvinar nibh sed, sodales orci.
                        </p>

                        <div className='blog-pages-social__wrapper'>
                            <Link to='https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv10.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fvillenoir7.mybigcommerce.com%252Fblog%252Fwine-fermentation-process%252F%2523.Y_t9p05D8ng.facebook%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_US' className='blog-pages__social-link'><i className="fa-brands fa-square-facebook blog-pages-social"></i></Link>
                            <Link to='https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-4e94ed470ee51e32&source=tbx32-300&lng=en&s=email&url=https%3A%2F%2Fvillenoir7.mybigcommerce.com%2Fblog%2Fwine-fermentation-process%2F&title=Wine%20Fermentation%20Process&ate=AT-ra-4e94ed470ee51e32/-/-/63fb7c47f171e542/3&uid=63332d75e2458775&description=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Donec%20rhoncus%20posuere%20mattis.%20Suspendisse%20venenatis%20massa%20in%20mattis%20condimentum.%20Vivamus%20porta%2C%20tellus%20vel%20ultricies%20facilisis%2C%20dolor%20arcu%20gravida%20leo%2C%20at%20commodo%20tellus%20tellus%20nec%20sapien.%20Suspendisse%20potenti.Nam%20efficitur%2C%20ligula%20vel%20ultrices%20feugiat%2C%20sapien%20sem%20euismod%20magna%2C%20eu%20maximus%20libero%20odio%20quis%20leo.%20Suspendisse%20ut%20enim%20porttitor%2C%20ultrices%20mauris%20eget%2C%20pretium%20enim.%20Aliquam%20vulputate%20sapien%20at%20urna%20tempor%20mollis.%20Fusce%20a%20ultrices%20justo.%20Curabitur%20sit%20amet%20nunc%20urna.%20Proin%20imperdiet%20nec%20felis%20et%20dictum.%20Nam%20id%20justo%20consequat%2C%20rhoncus%20ante%20aliquet%2C%20sodales%20ex.%20Morbi%20porta%20dui%20scelerisque%20ultricies%20tincidunt.%20Aliquam%20erat%20volutpat.%20Proin%20vitae%20turpis%20lectus.%20Nulla%20non%20nisi%20magna.%20Etiam%20sit%20amet%20nisi%20in%20massa%20dignissim%20tincidunt%20et%20vitae%20tortor.Sed%20sodales%20eu%20ligula%20nec%20hendrerit.%20Sed%20id%20diam%20est.%20Proin%20ullamcorper%20sem%20non%20justo%20ullamcorper%20sodales.%20Nulla%20tincidunt%2C%20turpis%20eu%20efficitur%20accumsan%2C%20sem%20felis%20bibendum%20nisl%2C%20sed%20interdum%20lectus%20nulla%20in%20lectus.%20Mauris%20gravida%20metus%20quis%20pharetra%20tincidunt.%20Nulla%20facilisis%20nisi%20nec%20libero%20interdum%2C%20a%20interdum%20dolor%20consequat.%20Aliquam%20pharetra%20arcu%20sit%20amet%20massa%20ullamcorper%20pulvinar.%20Integer%20pharetra%20risus%20nec%20ultrices%20tempor.%20Maecenas%20dapibus%20nunc%20nec%20nibh%20sagittis%20rutrum.%20Curabitur%20sollicitudin%20leo%20a%20lectus%20scelerisque%20dapibus.%20Etiam%20ornare%20finibus%20mi%20ullamcorper%20vulputate.%20Donec%20viverra%20libero%20justo%2C%20ut%20pulvinar%20metus%20aliquam%20quis.%20Pellentesque%20consequat%20erat%20nec%20molestie%20dignissim.%20Suspendisse%20n...&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&pre=https%3A%2F%2Fvillenoir7.mybigcommerce.com%2Fblog%2F&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D0%26smd%3Drsi%253D%2526gen%253D0%2526rsc%253D%2526dr%253Dhttps%25253A%25252F%25252Fvillenoir7.mybigcommerce.com%25252Fblog%25252F%2526sta%253DAT-ra-4e94ed470ee51e32%25252F-%25252F-%25252F63fb7c47f171e542%25252F1%26hideEmailSharingConfirmation%3Dundefined%26service%3Demail%26media%3Dundefined%26passthrough%3Dundefined%26email_template%3Dundefined%26email_vars%3Dundefined&atc=username%3Dra-4e94ed470ee51e32%26product%3Dtbx32-300%26widgetId%3Dundefined%26pubid%3Dra-4e94ed470ee51e32%26ui_pane%3Demail&rb=false' className='blog-pages__social-link'><i className="fa-solid fa-envelope blog-pages-social"></i></Link>
                            <Link to='https://twitter.com/intent/tweet?text=Wine%20Fermentation%20Process&url=https%3A%2F%2Fvillenoir7.mybigcommerce.com%2Fblog%2Fwine-fermentation-process%2F%23.Y_uMMsPmwGY.twitter&related=' className='blog-pages__social-link'><i className="fa-brands fa-square-twitter blog-pages-social"></i></Link>
                            <Link to='https://villenoir7.mybigcommerce.com/blog/winery-of-the-year/' className='blog-pages__social-link'><i className="fa-brands fa-square-pinterest blog-pages-social"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Harvest
