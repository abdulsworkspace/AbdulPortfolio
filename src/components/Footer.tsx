import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} </Text>
          <SmartLink href="/" style={{ textDecoration: 'none', marginRight: '4px' }}>
            <Text>Abdul Rehman</Text>
          </SmartLink>
          <Text onBackground="neutral-weak" style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}>
            • All Rights Reserved
            <Text style={{ width: '100%', margin: '4px 0' }}>
              Developed by Abdul Rehman • Built with{" "}
              <SmartLink
                style={{ marginLeft: "2px" }}
                href="https://once-ui.com/templates/magic-portfolio"
              >
                Once UI
              </SmartLink>
            </Text>
          </Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
