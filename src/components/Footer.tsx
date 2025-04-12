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
        <Text variant="body-default-s" onBackground="neutral-strong" style={{ textAlign: 'center' }}>
          <Text onBackground="neutral-weak">© {currentYear} </Text>
          <SmartLink href="/" style={{ textDecoration: 'none' }}>
            <Text style={{ color: '#4ade80' }}>{person.name}</Text>
          </SmartLink>
          <Text onBackground="neutral-weak" style={{ display: 'block', margin: '4px 0' }}>
            All Rights Reserved
          </Text>
          <Text onBackground="neutral-weak">
            Developed by Abdul Rehman • Built with{" "}
            <SmartLink
              style={{ color: '#4ade80' }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
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
