  	##1. Ubuntu recommends using snap packages for installation
    	`sudo snap install core`

  	##2 . Delete any previous version of Certbot in the system
    	`sudo apt remove certbot`

	##3. Install the Certbot
	`sudo snap install --classic certbot`
	
	##4. Link the Certbot command from the snap install directory to your path
     	`sudo ln -s /snap/bin/certbot /usr/bin/certbot`

	##5. Allow 443 port
    	`sudo ufw allow 443`

	##6. Create a manual challenge
	`certbot -d sub.domain.tld --manual --preferred-challenges dns certonly`
	
	##7. Configure the application
	`sudo ls /etc/letsencrypt/live/your_domain`
	
	##8. AUTO-RENEWAL
	`sudo nano /etc/letsencrypt/renewal/your_domain.conf`
	renew_hook= systemctl reload 
	`sudo certbot renew -dry-run`
