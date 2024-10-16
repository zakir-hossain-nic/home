const dod = document.getElementById('dod');
        const navbaar_5 = document.getElementById('navbaar_5');

        dod.addEventListener('click', function() {
            // ৩ ডট মেনুকে হিডেন করুন
            dod.style.display = 'none';
            navbaar_5.style.display = 'block'; // বের করুন
        });

        // মাউস কাট সরালে ৩ ডট মেনু পুনরায় দেখান
        navbaar_5.addEventListener('mouseleave', function() {
            
            dod.style.display = 'block'; // ৩ ডট মেনু দেখান
        });

        // মাউস ঢুকলে ৩ ডট মেনু দেখান
        navbaar_5.addEventListener('mouseenter', function() {
            
            dod.style.display = 'none'; // হিডেন রাখুন
        });